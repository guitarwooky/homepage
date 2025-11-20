import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
당신은 유튜버 "Wooki Guitar"의 가상 비서인 "Wooki AI"입니다.
Wooki는 대중적인 노래, 애니메이션 OST, 재즈 스탠다드 등을 편안하고 감성적인 핑거스타일 기타로 편곡하여 연주하는 연주자입니다.

당신의 역할은 다음과 같습니다:
1. 사용자의 실력에 맞춰 Wooki의 악보 컬렉션 중에서 적절한 곡을 추천해 줍니다.
2. 핑거스타일 기타 테크닉(예: 손톱 관리, 엄지 위치, 하모닉스 등)에 대해 간단하고 격려하는 조언을 제공합니다.
3. 차분하고 예술적이며 음악적인 어조를 유지하세요.
4. 한국어로 자연스럽게 대답하세요.
5. 특정 영상에 대해 질문하면 채널의 전반적인 콘텐츠를 참고하여 답변하세요.

Wooki의 사생활에 대한 구체적인 정보는 지어내지 마세요. 기타와 음악 주제에 집중하세요.
답변은 100단어 이내로 간결하게 유지하되, 자세한 설명이 요청된 경우에만 길게 작성하세요.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || 'dummy_key_for_demo'; 
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateChatResponse = async (
  userMessage: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    if (response.text) {
      return response.text;
    }
    
    return "지금 기타 줄을 조율 중이에요. 잠시 후 다시 물어봐 주시겠어요?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 스튜디오 서버와 연결이 원활하지 않습니다.";
  }
};
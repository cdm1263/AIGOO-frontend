import { REG_EXP } from "../constants/constants";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = dayNames[date.getDay()];

  return `${year}.${month}.${day}.(${dayName})`;
};

export const getKeywordsInSentence = (sentence: string) => {
  const words = [];
  let match;

  while ((match = REG_EXP.exec(sentence)) !== null) {
    const word = match[1];
    words.push(word);
  }

  return words;
};

export const isEnglishSentence = (textList: string) => {
  const englishPattern = /^[\d\s!"#$%&'()*+,./:;<=>?@A-Za-z-]+$/;
  return englishPattern.test(textList);
};

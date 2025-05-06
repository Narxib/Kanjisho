export interface KanjiResponse {
    kanji: Kanji;
    radical: Radical;
    references: References;
    examples: Example[];
  }
  
  export interface Example {
    japanese: string;
    meaning: Meaning;
    audio: Audio;
  }
  
  export interface Audio {
    opus: string;
    aac: string;
    ogg: string;
    mp3: string;
  }
  
  export interface Meaning {
    english: string;
  }
  
  export interface Kanji {
    character: string;
    meaning: Meaning;
    strokes: number;
    onyomi: Onyomi;
    kunyomi: Kunyomi;
    video: Video;
  }
  
  export interface Kunyomi {
    romaji: string;
    hiragana: string;
  }
  
  export interface Onyomi {
    romaji: string;
    katakana: string;
  }
  
  export interface Video {
    poster: string;
    mp4: string;
    webm: string;
  }
  
  export interface Radical {
    character: string;
    strokes: number;
    image: string;
    position: Position;
    name: Kunyomi;
    meaning: Meaning;
    animation: string[];
  }
  
  export interface Position {
    hiragana: string;
    romaji: string;
    icon: string;
  }
  
  export interface References {
    grade: number;
    kodansha: string;
    classic_nelson: string;
  }
  
  export interface Props {
    fetchedData: KanjiResponse;
  }


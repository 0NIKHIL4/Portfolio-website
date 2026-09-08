export function splitToChars(selector: string | HTMLElement): HTMLElement[] {
  const elements =
    typeof selector === "string"
      ? Array.from(document.querySelectorAll<HTMLElement>(selector))
      : [selector];
  const chars: HTMLElement[] = [];

  elements.forEach((el) => {
    const text = el.innerText || el.textContent || "";
    el.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.whiteSpace = char === " " ? "pre" : "normal";
      span.textContent = char;
      el.appendChild(span);
      chars.push(span);
    });
  });

  return chars;
}

export function splitToWords(selector: string | HTMLElement): HTMLElement[] {
  const elements =
    typeof selector === "string"
      ? Array.from(document.querySelectorAll<HTMLElement>(selector))
      : [selector];
  const words: HTMLElement[] = [];

  elements.forEach((el) => {
    const text = el.innerText || el.textContent || "";
    el.innerHTML = "";
    const wordList = text.split(" ");
    wordList.forEach((word, index) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = word;
      el.appendChild(span);
      words.push(span);
      if (index < wordList.length - 1) {
        const space = document.createElement("span");
        space.style.display = "inline-block";
        space.innerHTML = "&nbsp;";
        el.appendChild(space);
      }
    });
  });

  return words;
}

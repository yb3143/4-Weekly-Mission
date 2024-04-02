export const copyToClipboard = (text: string, callback?: () => void) => {
  if (typeof window !== "undefined" && window.navigator?.clipboard) {
    window.navigator.clipboard.writeText(text).then(() => {
      callback?.();
    });
  } else {
    const tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    callback?.();
  }
};

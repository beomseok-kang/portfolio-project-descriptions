export const textToHtml = (text: string) => {
    const tempArr = text.split('\n');
    tempArr.forEach((paragraph: string, i: number) => {
        return tempArr[i] = '<p>' + paragraph + '</p>'
    });
    const result = tempArr.join('');
    return result;
};
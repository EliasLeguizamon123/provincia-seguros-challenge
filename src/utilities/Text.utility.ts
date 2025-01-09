// * Esta utility me permite formatear texto con saltos de línea para que se muestren en la seccion Hero

export const formatTextWithLineBreaks = (text: string) => {
    return text.replace(/\n/g, '<br/>');
};
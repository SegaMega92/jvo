/**
 * Типографика для русского текста
 * Добавляет неразрывные пробелы по правилам русской типографики
 */

const NBSP = '\u00A0';

/**
 * Применяет типографские правила к тексту
 * @param {string} text - исходный текст
 * @returns {string} - текст с неразрывными пробелами
 */
export function typograph(text) {
  if (!text || typeof text !== 'string') return text;

  return text
    // После коротких предлогов и союзов (1-2 буквы)
    .replace(/ (в|на|с|к|о|у|и|а|но|за|до|из|по|от|об|со|во|ко|же|ли|бы|не|ни|то) /gi, ` $1${NBSP}`)
    // Перед тире
    .replace(/ (—|–)/g, `${NBSP}$1`)
    // После тире
    .replace(/(—|–) /g, `$1${NBSP}`)
    // Числа с единицами измерения
    .replace(/(\d) (₽|руб|%|шт|мин|сек|ч|дн|г|кг|мг|л|мл|м|см|мм|км)/gi, `$1${NBSP}$2`)
    // Числа с существительными (до 5 артикулов)
    .replace(/(\d) ([а-яё])/gi, `$1${NBSP}$2`);
}

/**
 * Применяет типографику к массиву строк
 * @param {string[]} texts - массив строк
 * @returns {string[]} - массив строк с типографикой
 */
export function typographArray(texts) {
  if (!Array.isArray(texts)) return texts;
  return texts.map(typograph);
}

export default typograph;

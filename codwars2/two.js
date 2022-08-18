// Объединить 2 массива, отсортировать от меньшего до большео и убрать дубликаты
function mergeArrays(arr1, arr2) { 
    const newArrow = [...arr1, ...arr2].sort(compareNumbers = (a,b) => a - b);
    newArrowDelete = new Set(newArrow);
    return [...newArrowDelete];
}
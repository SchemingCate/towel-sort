module.exports = function towelSort(matrix) {
    let output = [];
    if (!matrix) return output;
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                row.push(matrix[i][j]);
            } else {
                row.unshift(matrix[i][j]);
            }
        }
        output.push(...row);
    }
    return output;
};

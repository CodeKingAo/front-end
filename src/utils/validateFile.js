/**
 * 
 * @param {Object} file 文件对象属性
 * @param {Number} maxFileSize  上传文件最大体积
 * @param {Reg} reg 正则匹配文件类型
 * @param {String} tips 文件不匹配时的提示信息
 */
export default function testFile(file, maxFileSize = 10 * 1024 * 1024, reg = /(.docx?)$|(.xlsx?)$|(.rar)$|(.zip)$|(.7z)$/gi, tips = '请上传word、excel、压缩文件格式!') {
    if (!file) return
    if (file.size > maxFileSize) {
        this.$message.error(`文件最大支持${Math.round(maxFileSize / 1048576)}M!`)
        return false;
    }
    if (!reg.test(file.name)) {
        this.$message.error(tips)
        return false;
    }
    return true;
}
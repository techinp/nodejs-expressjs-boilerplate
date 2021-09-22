const codeNumber = {
  Success: 0,
  ServiceNotAvailable: 999,
};

const statusCode = (code) => {
  let res;
  switch (code) {
    case 0:
      res = { code, message: 'ดำเนินการสำเร็จ' };
      break;
    case 999:
      res = { code, message: 'ระบบไม่สามารถดำเนินการได้ในขณะนี้ ลองใหม่อีกครั้ง' };
      break;
    default:
      res = { code, message: 'ระบบไม่สามารถดำเนินการได้ในขณะนี้ ลองใหม่อีกครั้ง' };
      break;
  }
  return res;
};

const response = (code, data) => {
  return {
    status: statusCode(code),
    data,
  };
};

module.exports = {
  response,
  code: codeNumber,
};

//kas 테스트시 자기 인증으로 할 것 api 호출 횟 수 때문

const CaverExtKAS = require('caver-js-ext-kas')

// 인증 ID (AccessKey ID) 도형
const accessKeyId = 'KASK7755S9EO2XUAE19JMXM5'

// 인증 비밀번호 (Secret AccessKey) 도형
const secretAccessKey = '9R0sZIBBTqwzYklUGU65bklTBEUrW1aV971iqHyM'

// 네트워크 ID (Baobab: 1001, Cypress: 8217)
const chainId = 8217

const caverKas = new CaverExtKAS(chainId, accessKeyId, secretAccessKey)

export default caverKas
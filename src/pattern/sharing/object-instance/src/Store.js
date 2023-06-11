const Store = {
  value: 0,
  getValue() {
    return this.value;
  },
  setValue(newValue) {
    this.value = newValue;
  }
}
export default Store;

// const Store = (() => {
//   let value = 0;

//   return {
//     getValue() {
//       return value;
//     },
//     setValue(newValue) {
//       value = newValue;
//     }
//   };
// })();

// export default Store;


/**
 * 다음과 같은 코드 스니펫에서는 CommonJS 모듈 시스템을 사용하여 모듈을 가져오고 내보내고 있습니다. 이 시스템은 Node.js에서 사용되는 모듈 시스템이며 현대적인 브라우저에서도 지원됩니다.

이 시스템에서 모듈은 자체 기능을 캡슐화하는 별도의 파일로 처리되며 require() 함수나 import 키워드를 사용하여 다른 파일에서 가져올 수 있습니다. 모듈을 가져올 때 가져온 모듈의 내보낸 객체, 함수 또는 값을 액세스할 수 있습니다.

이 예제에서 Store.js 파일은 Store라는 객체를 내보냅니다. 이 객체는 getValue()와 setValue() 메소드를 포함합니다. 이 객체는 import 키워드를 사용하여 다른 모듈에서 가져올 수 있습니다.

print.js 및 increase.js 모듈은 모두 ./Store.js라는 동일한 상대 경로를 사용하여 Store.js 모듈을 가져옵니다. 이것은 두 모듈이 동일한 Store 객체에 액세스하고 수정할 수 있음을 의미합니다.
 * 
 */

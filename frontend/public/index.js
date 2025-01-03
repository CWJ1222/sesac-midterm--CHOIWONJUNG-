/* 1. https://jsonplaceholder.typicode.com/todos 로부터 데이터를 불러와서 추가해주는 함수 getTodos() 선언 */
// getTodos()는 추후에 HTML DOM 내용이 완전히 로드되었을 때 실행되어야 합니다.

async function getTodos() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  }).then((res) => {
    console.log(res.data);
    console.log(res.data.slice(10));

    const container = document.querySelector("ul");
    for (let user of res.data) {
      const div = document.createElement("div");
      const p = document.createElement("p");

      p.innerText = user.title;
      div.append(p);
      container.append(div);
    }
  });
}

function addTodo() {}

/*  3. x 버튼을 클릭하면 클릭한 버튼을 갖는 Todo 항목이 삭제됩니다. */
// 삭제 함수의 이름 및 모양 변경 가능
function deleteTodo(item) {}

/* 
 4. Todo 목록 불러오기,  
 - GET https://jsonplaceholder.typicode.com/todos 요청의 응답 결과에서 맨 처음부터 10개의 원소만 잘라내어 
   투두 목록에 초기 Todo를 표시해야 합니다.
 - HTML 문서의 DOM 내용이 완전히 로드되었을 때 실행됩니다.
 - 따로 함수를 만들어도 좋고, 함수를 만들지 않아도 좋습니다.
*/

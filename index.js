// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "All I want for Christmas Is You" },
  { "number": 2, "message": "Last Christmas" },
  { "number": 3, "message": "Santa Tell Me" },
  { "number": 4, "message": "You Make It Feel Like Christmas" },
  { "number": 5, "message": "What Christmas Means To Me" },
  { "number": 6, "message": "Christmas Without You" },
  { "number": 7, "message": "Christmas Tree Farm" },
  { "number": 8, "message": "25th" },
  { "number": 9, "message": "'Feliz Navidad" },
  { "number": 10, "message": "Santa Claus Is Coming to Town" },
  { "number": 11, "message": "Run Rudolph Run" },
  { "number": 12, "message": "Here" },
  { "number": 13, "message": "Snowman" },
  { "number": 14, "message": "Lover" },
  { "number": 15, "message": "It's For Everybody" },
  { "number": 16, "message": "Like It's Christmas" },
  { "number": 17, "message": "Make It To Christmas" },
  { "number": 18, "message": "With You This Christmas" },
  { "number": 19, "message": "All I Want" },
  { "number": 20, "message": "Hey Good Lookin'" },
  { "number": 21, "message": "Mistletoe" },
  { "number": 22, "message": "Santa's Coming For Us" },
  { "number": 23, "message": "It's Not Christmas Till Somebody Cries" },
  { "number": 24, "message": "Christmas Lights" }
];

function InitializingBeatyImage() {
	var index = 0;
	var url_cut;
	// tag A para acionar o zoom
	const imageAction = document.querySelectorAll('a[data-beaty-action="image-action"]');
	// tag img para inserir o src;
	const beatyImageFile = document.querySelector('#beaty-image-zoom');
	// container do beatyImage para mostrar o conteudo;
	const beatyImageContent = document.querySelector('.beaty-image');
	// botao para fechar o BeatyImage
	const closeBeatyImage = document.querySelector('.close-beaty-image');
	// array para armazenar as imagens;
	const beaty_images = [];
	// imagens para o array;

	// botao de prx & next
	const proxBeatyImage = document.querySelector('.prox-beaty-image');
	const backBeatyImage = document.querySelector('.back-beaty-image');
	proxBeatyImage.onclick = () => { }

	// imagens selecionadas para o array;
	const imagesSelecteds = document.querySelectorAll('img[data-image="beauty"]');
	// inserindo os atributo src em um array;
	imagesSelecteds.forEach((image) => {
		beaty_images.push(image.getAttribute('src'));
	})
	// beatyImageFile.setAttribute('data-beaty-index',index)

	console.log(beaty_images);
	imageAction.forEach(action => {
		action.onclick = function () {
			beatyImageContent.classList.add('show');
			console.log(this.children[0].src);
			url_cut = this.children[0].src.slice(21);
			console.log(url_cut);
			index = beaty_images.indexOf(url_cut)
			beatyImageFile.src = this.children[0].src;
		}
	});

	closeBeatyImage.onclick = () => beatyImageContent.classList.remove('show');

	proxBeatyImage.onclick = () => {
		index++;
		beatyImageFile.src = beaty_images[index];

		beatyImageFile.animate([
			{ transform: 'translateX(-100px)' },
			{ opacity: '0.3' },
			{ opacity: '1' }
		], {
			duration: 200,
		})

		if (index > beaty_images.length - 1) {
			index = 0;
			beatyImageFile.src = beaty_images[0];
		}
		console.log("index atual", index);
	}

	backBeatyImage.onclick = () => {
		beatyImageFile.animate([
			{ transform: 'translateX(100px)' },
			{ opacity: '0.3' },
			{ opacity: '1' }
		], {
			duration: 200,
		})

		index--;
		beatyImageFile.src = beaty_images[index];
		if (index < 0) {
			index = beaty_images.length - 1;
			beatyImageFile.src = beaty_images[index];
		}
	};
	// // get a initial position on click mouse; [X,Y];
	// var indexGrab = 0;
	// beatyImageFile.onmousedown = (e) => {
	// 	indexGrab = e.x;
	// 	beatyImageFile.addEventListener('mousemove', draggableImage)
	// 	console.log(indexGrab);
	// };

	// const draggableImage = e => {
	// 	if (e.clientX < indexGrab) {
	// 		console.log("descendo");
	// 	} else if (e.clientX > indexGrab) {
	// 		console.log("subindo");
	// 	}
	// };

	// beatyImageFile.onmouseup = () => beatyImageFile.removeEventListener('mousemove', draggableImage);
}
InitializingBeatyImage();
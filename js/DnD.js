if (Modernizr.draganddrop) {
	console.log('Soporto DnD');

	  function handleDragStart(e) {
  	  this.style.opacity = '0.4';  // this / e.target is the source node.
		 dragSrcEl = this;

		  e.dataTransfer.effectAllowed = 'move';
		  e.dataTransfer.setData('text/html', this.innerHTML);

		  var dragIcon = document.createElement('img');
			dragIcon.src = 'img/cursos.png';
			dragIcon.width = 100; 
			e.dataTransfer.setDragImage(dragIcon,-5,-5);

		}
      function handleDragOver(e) {
		  if (e.preventDefault) {
		    e.preventDefault(); // Necessary. Allows us to drop.
		  }
		  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
		  return false;
		}

	  function handleDragEnter(e) {
		  // this / e.target is the current hover target.
		  this.classList.add('over');
		}

	  function handleDragLeave(e) {
		  this.classList.remove('over');  // this / e.target is previous target element.
		}

	  function handleDrop(e) {
	  // this / e.target is current target element.
	  if (e.stopPropagation) {
	    e.stopPropagation(); // stops the browser from redirecting.
	  }
	  // Don't do anything if dropping the same column we're dragging.
	  if (dragSrcEl != this) {
	    // Set the source column's HTML to the HTML of the columnwe dropped on.
	    dragSrcEl.innerHTML = this.innerHTML;
	    this.innerHTML = e.dataTransfer.getData('text/html');
	  }
	  return false;
	}

	function handleDragEnd(e) {
	  // this/e.target is the source node.
	  [].forEach.call(cols, function (col) {
	    col.classList.remove('over');
	  });
	}	

		var cols = document.querySelectorAll('#columns .column');
		[].forEach.call(cols, function(col) {
		  col.addEventListener('dragstart', handleDragStart, false);
		  col.addEventListener('dragenter', handleDragEnter, false);
		  col.addEventListener('dragover', handleDragOver, false);
		  col.addEventListener('dragleave', handleDragLeave, false);
		  col.addEventListener('drop', handleDrop, false);
          col.addEventListener('dragend', handleDragEnd, false);
		});

	} else {
	  console.log('No soporto DnD, mi navegador y yo somos muy tontos');
	}
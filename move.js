function move(obj,name,target){
				clearInterval(obj.timer)
				// alert(parseInt(getComputedStyle(oDiv1).width))
				obj.timer=setInterval(function(){
					let nowStyle=parseInt(getComputedStyle(obj)[name])
					if (nowStyle==target) {
						clearInterval(obj.timer)
					} else{
						let speed=(target-nowStyle)/10
						obj.style[name]=nowStyle+speed+'px'
					}
				},10)
			}
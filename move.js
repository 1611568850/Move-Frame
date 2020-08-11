function move(obj,name,target){
				clearInterval(obj.timer)
				// alert(parseInt(getComputedStyle(oDiv1).width))
				obj.timer=setInterval(function(){
					let nowStyle=parseInt(getComputedStyle(obj)[name])
						let speed=(target-nowStyle)/10
						if (speed>0) {
							speed=Math.ceil(speed)
						} else{
							speed=Math.floor(speed)
						}
					if (nowStyle==target) {
						clearInterval(obj.timer)
					} else{
						obj.style[name]=nowStyle+speed+'px'
					}
				},10)
			}
import {qs,qsa} from '../libs';

export function Ui(){
	mobile_menu_icon_animation()
	mobile_menu_show()
	mobile_menu_open_submenu()
}


function mobile_menu_icon_animation(){
	if(!qs('#nav-icon2')){console.log('nav icon not found'); return}
	qs('#nav-icon2').addEventListener('click', event => {
		event.target.classList.toggle('open')
	})
}

function mobile_menu_open_submenu(){
	if(!qs('.mobile-menu ul li')){console.log('mobile menu not found'); return}
	qsa('.mobile-menu ul li').forEach(el => {
		el.addEventListener('click', event => {
			event.target.classList.toggle('open')
		})
	})
}

function mobile_menu_show(){
	if(!qs('.mobile-menu')){console.log('mobile menu not found'); return}
	
	qs('#nav-icon2').addEventListener('click', event => {
		qs('.mobile-menu').classList.toggle('open')
	})
}
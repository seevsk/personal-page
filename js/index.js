'use strict';
const documentReady = () => {
    
    const openMenu = () => {
        const navLinkList = document.querySelector('.nav__lists');
        navLinkList.classList.add('nav__lists--open');
    }
    const navMenuIcon = document.querySelector('.nav__menu-icon');
    navMenuIcon.addEventListener('click', openMenu);

const closeMenu = () => {
    const navLinkList = document.querySelector('.nav__lists');
    navLinkList.classList.remove('nav__lists--open');
}

    const navCloseIcon = document.querySelector('.nav__close-icon');
    navCloseIcon.addEventListener('click', closeMenu);
    };

const closeMenu = () => {
    const navLinkList = document.querySelector('.nav__lists');
    navLinkList.classList.remove('nav__lists--open');
}

    const navCloseIcon = document.querySelector('.nav__lists');
    navCloseIcon.addEventListener('click', closeMenu);

document.addEventListener('DOMContentLoaded', documentReady);


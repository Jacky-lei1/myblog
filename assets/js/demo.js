/*
 * blueimp Gallery Demo JS 2.11.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: '【SAO Util刀剑风格启动器】—《你的名字》樱花粉主题，个性化还原',
            href: '/src/video/1.mp4',
            type: 'video/mp4',
            poster: '/assets/img/1.jpg'
        },
        {
            title: '我的视频2',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbXA5WWFqNFlJVHdWNWRhP2U9bmxRdk5m.mp4',
            type: 'video/mp4',
			poster: '/assets/img/2.jpg'
        },
        {
            title: '我的视频3',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbXA5WWFqNFlJVHdWNWRhP2U9bmxRdk5m.mp4',
            type: 'video/mp4',
            poster: '/assets/img/3.jpg'
        }
     
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});

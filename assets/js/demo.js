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
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbXRzN1huRlpiN3FUUlYzP2U9NHpnSG5n.mp4',
            type: 'video/mp4',
            poster: '/assets/img/1.jpg'
        },
        {
            title: '【贾维斯人工智能系统】深度还原Jarvis智能AI语音系统，个人电脑的私人语音管家',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbkRCc0QtenZKNkpxX3d2P2U9Z1dIeGxn.mp4',
            type: 'video/mp4',
			poster: '/assets/img/2.jpg'
        },
        {
            title: '【Kon-Boot】解决密码问题的最佳工具',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbXplV01PZHMxZlZtcmJ3P2U9OGJoa3pR.mp4',
            type: 'video/mp4',
            poster: '/assets/img/3.jpg'
        }
		
		{
            title: '【工具+网站】免费下载各大文库收费文档的方法（完美版）',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbS1sd1c0a1ozV3B1aDNDP2U9Y2dsYlgz.mp4',
            type: 'video/mp4',
            poster: '/assets/img/4.jpg'
        },
        {
            title: '【神器合集】两个网站，搜罗全网资源',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc3YxaE52QnZMN05nbTZwaGxzdEpUV3RNQlR6P2U9c3o5UXlj.mp4',
            type: 'video/mp4',
			poster: '/assets/img/5.jpg'
        },
        {
            title: '【抖音国际版】Tik Tok最新使用教程，可以免费观看外国的小哥哥小姐姐哟！',
            href: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBc3YxaE52QnZMN05nbTFiaDdrWWgwLVlqNzFiP2U9aEJzdWlo.mp4',
            type: 'video/mp4',
            poster: '/assets/img/6.jpg'
        }
     
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});

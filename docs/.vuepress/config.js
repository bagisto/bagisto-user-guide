module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Bagisto User Guide',
    description: 'Bagisto Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { name: 'description', content: 'Your meta description here' }],
        ['meta', { name: 'keywords', content: 'keyword1, keyword2, keyword3' }],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'bagisto/bagisto',
        repoLabel: 'Contribute to Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Prologue',
                    path: '',
                    collapsable: true,
                    children: [
                        ['prologue/upgrade-guide', 'Upgrade Guide'],
                        ['prologue/contribution-guide', ' Contribution Guide']
                    ],
                },
            ],
        }
    },
    markdown: {
        lineNumbers: false,
        // externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top', 'jsonld']
};

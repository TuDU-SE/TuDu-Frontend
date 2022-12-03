/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        sections: [
            { slug: 'basics', title: 'Settings'},
            { slug: 'profile', title: 'Profile' },
            { slug: 'notifications', title: 'Notifications' }
        ]
    };
}
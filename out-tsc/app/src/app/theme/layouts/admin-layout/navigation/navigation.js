export const NavigationItems = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'default',
                title: 'Default',
                type: 'item',
                classes: 'nav-item',
                url: '/dashboard/default',
                icon: 'dashboard',
                breadcrumbs: false
            }
        ]
    },
    {
        id: 'sports',
        title: 'Sports',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'baseball',
                title: 'Béisbol',
                type: 'collapse',
                icon: 'dashboard',
                children: [
                    {
                        id: 'baseball-generate',
                        title: 'Generar predicción',
                        type: 'item',
                        url: '/sports/baseball/generate'
                    },
                    {
                        id: 'baseball-results',
                        title: 'Obtener predicciones',
                        type: 'item',
                        url: '/sports/baseball/results'
                    },
                    {
                        id: 'baseball-update',
                        title: 'Actualizar resultados',
                        type: 'item',
                        url: '/sports/baseball/update'
                    }
                ]
            },
            {
                id: 'football',
                title: 'Fútbol',
                type: 'collapse',
                icon: 'dashboard',
                children: [
                    {
                        id: 'football-generate',
                        title: 'Generar predicción',
                        type: 'item',
                        url: '/sports/football/generate'
                    },
                    {
                        id: 'football-results',
                        title: 'Obtener predicciones',
                        type: 'item',
                        url: '/sports/football/results'
                    },
                    {
                        id: 'football-update',
                        title: 'Actualizar resultados',
                        type: 'item',
                        url: '/sports/football/update'
                    }
                ]
            }
        ]
    },
    {
        id: 'authentication',
        title: 'Authentication',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'login',
                title: 'Login',
                type: 'item',
                classes: 'nav-item',
                url: '/login',
                icon: 'login',
                target: true,
                breadcrumbs: false
            },
            {
                id: 'register',
                title: 'Register',
                type: 'item',
                classes: 'nav-item',
                url: '/register',
                icon: 'profile',
                target: true,
                breadcrumbs: false
            }
        ]
    },
];
//# sourceMappingURL=navigation.js.map
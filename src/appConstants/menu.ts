export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { 
        key: 'manage-Team', 
        label: 'Manage Team', 
        isTitle: false,
        icon: 'uil-object-ungroup',
        url:'/manageteam'
    },
    { 
        key: 'compensation', 
        label: 'Compensation',
        isTitle: false,
        icon: 'uil-paypal',
        url:'/compensation'
    },
    { 
        key: 'active-loads', 
        label: 'Active loads',
        icon: 'uil-truck-loading',
        isTitle: false,
        url:'/activeloads'
    },
    {
        key: 'trip',
        label: 'Trip',
        isTitle: false,
        icon: 'uil-clipboard-alt',
        url:'/trip',
    },
];

export { MENU_ITEMS };

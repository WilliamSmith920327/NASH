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
    { key: 'manage-Team', label: 'Manage Team', url:'/manageteam'},
    { key: 'compensation', label: 'Compensation', url:'/compensation'},
    { key: 'active-loads', label: 'Active loads', url:'/activeloads'},
    {
        key: 'trip',
        label: 'Trip',
        isTitle: false,
        icon: 'uil-home-alt',
        badge: { variant: 'success', text: '4' },
        url:'/trip',
    },
];

export { MENU_ITEMS };

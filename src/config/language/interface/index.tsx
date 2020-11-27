export default interface LangFileProps {
    header: {
        name: string,
        route: string
    }[],
    headerButton: {
        name: string;
        route: string;
    },
    completeMap: {  
        name: string,
        isActive: boolean
    }[],
    home: Page,
    historyPage: Page,
    economyPage: Page,
    environmentPage: Page,
    routesPage: Page,
    notFound: {
        title: string,
        subtitle: string,
        content: SimpleContentPage,
    }
};

export type SimpleContentPage = (TextProps | ImagesProps | TextAndButtonProps | TextWithReportsProps | null)[];
export type Page = {
    title: string,
    subtitle: string,
    button: {
        text: string,
        route: string
    }[],
    content: SimpleContentPage,
};

interface TextProps {
    idName?: string,
    type: "Text",
    title: string,
    subtitle: string
};

interface ImagesProps {
    idName?: string,
    type: "Images",
    title?: string;
    subtitle?: string;
    images: {
        src: string;
        filter?: string;
        title?: string;
        haveLink?: boolean;
    }[];
}

interface TextAndButtonProps {
    type: "TextAndButton",
    title: string,
    subtitle: string,
    button: {
        text: string,
        route: string
    }
};

interface TextWithReportsProps {
    idName?: string,
    type: "TextWithReports",
    title: string,
    subtitle?: string,
    content: {
        title: string,
        subtitle: string;
    }[];
    images?: {
        src: string;
        filter?: string;
        title?: string;
        haveLink?: boolean;
    }[];
};
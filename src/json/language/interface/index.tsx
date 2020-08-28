export default interface LangFileProps {
    header: {
        name: string,
        route: string
    }[],
    headerButton: {
        name: string;
        route: string;
    },
    home: {
        title: string,
        subtitle: string,
        button: {
            text: string,
            route: string
        }[],
        content: SimpleContentPage,
    },
    notFound: {
        title: string,
        subtitle: string,
    }
};

export type SimpleContentPage = (TextProps | ImagesProps | TextAndButtonProps | null)[];

interface TextProps {
    type: "Text",
    title: string,
    subtitle: string
};

interface ImagesProps {
    type: "Images",
    title?: string;
    subtitle?: string;
    images: {
        src: string;
        filter: string;
        title: string;
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
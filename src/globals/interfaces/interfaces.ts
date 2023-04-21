export interface ChildrenProp {
    children: JSX.Element;
}

export interface CardQuartoProps {
    title: string;
    pic: any;
    description: string;
}

export interface PageTemplateProps {
    title?: string;
    children: JSX.Element | JSX.Element[];
}

export interface InputDataProps {
    setData: React.Dispatch<React.SetStateAction<any>>;
    defaultValue?: string | number | readonly string[] | undefined;
}

export interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<any>>;
    title: string;
    children: JSX.Element | JSX.Element[];
    handleModalConfirm: () => {}
}
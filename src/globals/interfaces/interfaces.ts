export interface ChildrenProp {
    children: JSX.Element;
}

export interface CardQuartoProps {
    title: string;
    pic: string;
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
    openModal: boolean,
    handleClose: () => void,
    title: string;
    confirmTitle: string;
    children: JSX.Element | JSX.Element[];
    handleModalConfirm: () => {}
}

export interface CardParentProps {
    children: JSX.Element | JSX.Element[],
    width?: string,
    height?: string,

}
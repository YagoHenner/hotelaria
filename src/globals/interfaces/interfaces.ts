import { User } from "../types";

export interface ChildrenProp {
    children: JSX.Element;
}

export interface CardQuartoProps {
    title: string;
    imagename: string;
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
    handleModalConfirm?: () => {}
}

export interface CardParentProps {
    children: JSX.Element | JSX.Element[],
    width?: string,
    height?: string,
}

export interface CardHospedeProps {
    children?: JSX.Element | JSX.Element[],
    hospede: User,
    width?: string,
    height?: string,
}

export interface InputHookProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    control: any;
    width?: string;
    height?: string;
    defaultValue?: string;
    obrigatorio?: boolean;
}
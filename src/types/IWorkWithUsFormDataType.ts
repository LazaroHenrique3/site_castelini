export interface IWorkWithUsFormType {
    store: string,
    name: string,
    email: string,
    phone: string,
    state: string,
    city: string,
    curriculum: File | null;
    message: string,
}

export interface IWorkWithUsFormTypeWithBase64 extends IWorkWithUsFormType {
    curriculumBase64: string;  
}
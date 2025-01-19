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
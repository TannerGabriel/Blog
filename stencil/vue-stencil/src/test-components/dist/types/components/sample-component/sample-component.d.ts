import { EventEmitter } from '../../stencil.core';
export declare class SampleComponent {
    text: string;
    name: string;
    state: boolean;
    isActive: boolean;
    updateStatement(): void;
    active: EventEmitter;
    activeStateHandler(event: CustomEvent): void;
    handleClick(): void;
    getState(): Promise<boolean>;
    getTheState(): boolean;
    messageDiv: HTMLElement;
    showMessage(): void;
    internalState: boolean;
    componentDidLoad(): void;
    render(): any;
}

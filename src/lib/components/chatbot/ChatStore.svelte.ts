import type { Message } from './types.js';

class ChatStore {
	#messages = $state<Message[]>([]);
	#isLoading = $state(false);
	#error = $state('');
	#latestChilliId = $state<string | null>(null);
	#chilliInHeader = $state(false);

	get messages(): Message[] {
		return this.#messages;
	}

	get isLoading(): boolean {
		return this.#isLoading;
	}

	get error(): string {
		return this.#error;
	}

	get latestChilliId(): string | null {
		return this.#latestChilliId;
	}

	get chilliInHeader(): boolean {
		return this.#chilliInHeader;
	}

	set isLoading(value: boolean) {
		this.#isLoading = value;
	}

	set error(value: string) {
		this.#error = value;
	}

	set latestChilliId(value: string | null) {
		this.#latestChilliId = value;
	}

	set chilliInHeader(value: boolean) {
		this.#chilliInHeader = value;
	}

	addMessage(msg: Message) {
		this.#messages.push(msg);
	}

	clearMessages() {
		this.#messages = [];
	}

	clearError() {
		this.#error = '';
	}
}

export const store = new ChatStore();

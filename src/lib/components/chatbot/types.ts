export interface Message {
	id: string;
	role: 'user' | 'assistant';
	message: string;
	timestamp: Date;
	compatible_with_chilli?: boolean;
}

export interface ChatbotProps {
	title?: string;
	placeholder?: string;
}

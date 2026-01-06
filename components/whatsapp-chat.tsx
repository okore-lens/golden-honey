"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappChat = () => {
    return (
        <FloatingWhatsApp
            accountName="Golden Honey"
            phoneNumber="+254741844437"
            notificationSound
        />
    );
};

export default WhatsappChat;

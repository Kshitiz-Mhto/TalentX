'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth/model/auth.store';
import { useSocketStore } from '@/features/messaging/model/socket.store';
import { WS_URL } from '@/shared/api/client';

export default function SocketProvider({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, token } = useAuthStore();
    const { connect, disconnect } = useSocketStore();

    useEffect(() => {
        if (isAuthenticated && token) {
            connect(WS_URL, token);
        } else {
            disconnect();
        }

        return () => {
            disconnect();
        };
    }, [isAuthenticated, token, connect, disconnect]);

    return <>{children}</>;
}

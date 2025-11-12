
import React from 'react';
import { VerdictStatus } from '../types';

interface VerdictBadgeProps {
    verdict: VerdictStatus;
}

const verdictStyles: Record<VerdictStatus, { text: string; bg: string }> = {
    [VerdictStatus.Authentic]: { text: 'text-authentic', bg: 'bg-authentic/20' },
    [VerdictStatus.Misleading]: { text: 'text-misleading', bg: 'bg-misleading/20' },
    [VerdictStatus.Fake]: { text: 'text-fake', bg: 'bg-fake/20' },
    [VerdictStatus.Unverified]: { text: 'text-unverified', bg: 'bg-unverified/20' },
};

const VerdictBadge: React.FC<VerdictBadgeProps> = ({ verdict }) => {
    const style = verdictStyles[verdict];

    return (
        <span className={`text-xs font-bold uppercase tracking-wider rounded-full px-2 py-1 ${style.text} ${style.bg}`}>
            {verdict}
        </span>
    );
};

export default VerdictBadge;

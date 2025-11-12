
import React from 'react';
import { Link } from 'react-router-dom';
import { IVerificationCase } from '../types';
import VerdictBadge from './VerdictBadge';

interface CaseCardProps {
    caseData: IVerificationCase;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
    return (
        <Link to={`/report/${caseData.id}`} className="flex flex-col gap-3 rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                style={{ backgroundImage: `url("${caseData.imageUrl}")` }}
                role="img"
                aria-label={caseData.imageAlt}
            ></div>
            <div className="p-4 pt-0 flex flex-col gap-2">
                <div className="inline-flex pt-2">
                   <VerdictBadge verdict={caseData.verdict} />
                </div>
                <p className="text-text-light dark:text-text-dark text-base font-bold leading-normal">{caseData.title}</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">{caseData.description}</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs font-normal leading-normal pt-2">Verified: {caseData.date} | Source: {caseData.source}</p>
            </div>
        </Link>
    );
};

export default CaseCard;

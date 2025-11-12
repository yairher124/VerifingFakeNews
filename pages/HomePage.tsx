
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseCard from '../components/CaseCard';
import { VERIFICATION_CASES } from '../constants';
import { VerdictStatus } from '../types';

const HomePage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<VerdictStatus | 'All'>('All');
    const filters: (VerdictStatus | 'All')[] = ['All', VerdictStatus.Authentic, VerdictStatus.Misleading, VerdictStatus.Fake, VerdictStatus.Unverified];
    
    const verdictStyles: Record<VerdictStatus, { text: string; hoverBg: string }> = {
        [VerdictStatus.Authentic]: { text: 'text-authentic', hoverBg: 'hover:bg-green-100 dark:hover:bg-green-900/50' },
        [VerdictStatus.Misleading]: { text: 'text-misleading', hoverBg: 'hover:bg-yellow-100 dark:hover:bg-yellow-500/20' },
        [VerdictStatus.Fake]: { text: 'text-fake', hoverBg: 'hover:bg-red-100 dark:hover:bg-red-500/20' },
        [VerdictStatus.Unverified]: { text: 'text-unverified', hoverBg: 'hover:bg-gray-200 dark:hover:bg-gray-700' },
    };

    const filteredCases = useMemo(() => {
        if (activeFilter === 'All') {
            return VERIFICATION_CASES;
        }
        return VERIFICATION_CASES.filter(c => c.verdict === activeFilter);
    }, [activeFilter]);

    return (
        <>
            <Header />
            <main>
                <div className="@container">
                    <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA54AEqJODS0bMaoev4IAIo5jTkbZc5fgzPW74DZJV7te1ROSjB39YZnSex_GGBekSA9U2KeiWBN440wREI9wMVEFqEN-G_lDH1W7vwGQRRAP3j-gbYqVO7l4Ruo3EnosVat6BIaevABkVo4DEPYH8Kw3YRzyoKJfT6rt0-hSUM-qqWx34gTDBEtPipUM6sRtCopKJzOyFU_MCNtW3Vf584W1CUkRvg53XQV6B_KaldfWHq4SgbLnLmRkW1t-lJUs31cdUF0p5csp9U")` }}></div>
                        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                            <div className="flex flex-col gap-2 text-left">
                                <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Verifying Viral Footage. Fighting Misinformation.</h1>
                                <h2 className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">We provide evidence-based verification for viral videos claiming to be from Gaza, helping you distinguish fact from fiction.</h2>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                <span className="truncate">View Recent Verifications</span>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest Verifications</h2>
                
                <div className="flex gap-3 p-3 overflow-x-auto">
                    {filters.map(filter => {
                        const isAll = filter === 'All';
                        const isActive = activeFilter === filter;
                        const styles = !isAll ? verdictStyles[filter] : { text: 'text-primary', hoverBg: '' };

                        return (
                            <button 
                                key={filter} 
                                onClick={() => setActiveFilter(filter)}
                                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium leading-normal ${
                                    isActive 
                                        ? isAll ? 'bg-primary/20 dark:bg-primary/30' : verdictStyles[filter as VerdictStatus].text.replace('text-', 'bg-') + '/20'
                                        : `bg-surface-light dark:bg-surface-dark ${!isAll ? styles.hoverBg : ''}`
                                }`}
                            >
                                <p className={isAll && isActive ? 'text-primary' : !isAll ? styles.text : 'text-text-light dark:text-text-dark'}>{filter}</p>
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-4">
                    {filteredCases.map(caseData => (
                        <CaseCard key={caseData.id} caseData={caseData} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;

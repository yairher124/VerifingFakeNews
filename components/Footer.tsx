
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const Footer: React.FC = () => {
    return (
        <footer className="mt-10 border-t border-border-light dark:border-border-dark pt-8 pb-4 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="size-5 text-primary">
                        <LogoIcon />
                    </div>
                    <h2 className="text-text-light dark:text-text-dark text-base font-bold">VerifyVision</h2>
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" to="/#">About Us</Link>
                    <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" to="/methodology">Methodology</Link>
                    <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" to="/#">Submit a Video</Link>
                    <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" to="/#">Contact</Link>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center md:text-right">© 2023 VerifyVision. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

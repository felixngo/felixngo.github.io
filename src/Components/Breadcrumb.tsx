import {
    Breadcrumb
} from 'semantic-ui-react'
import Section from "./Section.tsx";
import {useEffect, useState} from "react";

export interface Status {
    icon: string;
    name: string;
    color: string;
}

interface BreadcrumbProps {
    statuses: Status[];
    selected: number;
}

export default function BreadcrumbComponent({ statuses, selected }: BreadcrumbProps) {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsSmall(window.innerWidth < statuses.length * 150);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setIsSmall(window.innerWidth < statuses.length * 150);
            });
        };
    }, []);
    let i = 0;
    return (
        <Breadcrumb style={{display: "inline-flex", alignItems: "flex-start", gap: 0}}>
            {
                statuses.map((status) => {
                    i += 1;
                    return (
                        <Section
                            icon={status.icon}
                            name={status.name}
                            color={status.color}
                            selected={i-1 == selected}
                            position={i === 1 ? "start" : i === statuses.length ? "end" : "middle"}
                            small={isSmall}
                            previous={i == selected}
                            nextColor={i < statuses.length ? statuses[i].color : null}
                        />
                    )
                })
            }
        </Breadcrumb>
    )
}
import {
    Breadcrumb
} from 'semantic-ui-react'
import Section from "./Section.tsx";
import {useEffect, useState} from "react";
import StatusDropdown from "./StatusDropdown.tsx";

enum Size {
    small = "small",
    medium = "medium",
    large = "large"
}

export interface Status {
    icon: string;
    name: string;
    color: string;
    dividerColor?: string;
}

interface BreadcrumbProps {
    statuses: Status[];
    selected: number;
}

export default function BreadcrumbComponent({ statuses, selected }: BreadcrumbProps) {
    const [size, setSize] = useState<Size>(Size.large);
    const [activeIndexes, setActiveIndexes] = useState<number[]>([selected])

    useEffect(() => {
        setActiveIndexes([selected])
    }, [selected]);

    const handleResize = () => {
        if (window.innerWidth < (300 + (statuses.length - 1) * 50))
            setSize(Size.small)
        else if (window.innerWidth < statuses.length * 150)
            setSize(Size.medium)
        else
            setSize(Size.large)
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        size == Size.medium || size == Size.large ?
            <Breadcrumb style={{display: "inline-flex", alignItems: "flex-start", gap: 0}}>
                {
                    statuses.map((status, index) => {
                        return (
                            <Section
                                key={index}
                                icon={status.icon}
                                name={status.name}
                                color={status.color}
                                position={index === 0 ? "start" : index === statuses.length -1 ? "end" : "middle"}
                                small={size == Size.medium}
                                nextColor={index + 1 < statuses.length ? statuses[index + 1].color : null}
                                activeIndexes={activeIndexes}
                                index={index}
                                changeIndex={setActiveIndexes}
                            />
                        )
                    })
                }
            </Breadcrumb>
        :
            <StatusDropdown statuses={statuses} selectedIndex={selected}/>
    )
}
import React from "react";
import { ServicesContainer } from "./Services.styled";

export const Services = () => {
    return (
        <ServicesContainer>
            <p>Услуги</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <button>Заказать Услугу</button>
        </ServicesContainer>
    )
}
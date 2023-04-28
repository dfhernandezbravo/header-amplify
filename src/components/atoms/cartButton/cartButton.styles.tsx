import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const BadgeQuantity = styled.div`
    background-color: #fdf737;
    border: 1px solid #cc1414;
    border-radius: 10px;
    color: #333;
    font-weight: 700;
    padding: 2px;
    position: relative;
    left: 40px;
    top: -16px;
    min-width: 24px;
    text-align: center;
    font-size: 0.9rem;
`;

export const CartText = styled.div`
    line-height: 1.5rem;
    font-weight: 600;
    margin-left: 5px;
`;

import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const BadgeQuantity = styled.div`
    background-color: #fdf737;
    border: 1px solid #cc1414;
    border-radius: 10px;
    color: #333;
    font-weight: 700;
    padding: 0;
    position: relative;
    left: 32px;
    top: -10px;
    min-width: 24px;
    text-align: center;
    font-size: 12px;
`;

export const CartText = styled.div`
    line-height: 1.5rem;
    font-weight: 500;
    font-size: 14px;
    margin-left: 5px;
`;

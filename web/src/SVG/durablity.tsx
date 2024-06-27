export default function DamagePercent({percent, styles, label}: {percent: number, styles?: React.CSSProperties, label?: string}) {
    return (
        <div style={styles}>
            <div style={{ marginLeft: '0.2vw' }}>
                {label}
            </div>
            <div style={{ marginLeft: '0.2vw', border: '1px solid rgba(187, 187, 187, 0.5)'}}>
                <div
                    style={{
                        height: '0.2vw',
                        width: `${percent}%`,
                        backgroundColor: 'rgba(180, 0, 0, 0.8)',
                        transition: `background ${0.3}s ease, width ${0.3}s ease`,
                    }}
                >
                </div>
            </div>
        </div>
    )
}
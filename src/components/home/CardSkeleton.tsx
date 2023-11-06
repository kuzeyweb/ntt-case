import { Card, CardContent, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Card className="product" sx={{ minWidth: 275 }}>
      <CardContent>
        <Skeleton
          variant="rectangular"
          width={259}
          height={179}
          style={{ marginBottom: "12px" }}
        />

        <Skeleton
          variant="text"
          width={150}
          height={24}
          style={{ marginBottom: "3px" }}
        />

        <Skeleton
          variant="text"
          width={80}
          height={18}
          style={{ marginBottom: "4px" }}
        />

        <Skeleton variant="text" width={100} height={14} />

        <Skeleton
          variant="text"
          width={180}
          height={14}
          style={{ marginBottom: "4px" }}
        />

        <Skeleton
          variant="text"
          width={80}
          height={12}
          style={{ marginBottom: "4px" }}
        />

        <Skeleton
          variant="circular"
          width={32}
          height={32}
          style={{ position: "absolute", top: "23px", right: "24px" }}
        />
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;

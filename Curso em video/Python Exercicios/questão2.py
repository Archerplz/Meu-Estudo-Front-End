N = 7

if N > 1:
    for i in range(2, int(N/2)+1):
         if (N % i) == 0:
            print("nao eh primo")
            break
    else:
        print("eh primo")

else:
    print("nao eh primo")